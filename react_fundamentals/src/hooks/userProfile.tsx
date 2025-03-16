import { useEffect, useState } from "react";
import axios from "axios";

export type User = {
  name: string;
  thumbnail: string;
  age: number;
  phone: string;
  email: string;
};
type Function = () => void;

const userProfileIterator = (url: string): [User, boolean] => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [users, setuUers] = useState<User[]>([]);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(url);

      if (data.results && data.results[0]) {
        setuUers((prevUsers) => {
          const user = data.results[0];
          return [
            ...prevUsers,
            {
              name: `${user.name.title} ${user.name.first} ${user.name.last}`,
              age: user.dob.age,
              phone: user.phone,
              email: user.email,
              thumbnail: user.picture.medium,
            },
          ];
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const previous = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  const next = () => {
    if (index < users.length - 1) {
      setIndex((prev) => prev + 1);
      return;
    }

    fetchUser().then((res) => setIndex((prev) => prev + 1));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return [users[index], loading, previous, next];
};

export default userProfileIterator;
