import React, { createContext, useState, useContext, ReactNode } from "react";

interface User {
  name: string;
  email: string;
}
const UserContext = createContext<User | undefined>(undefined);

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({
    name: "nandhini",
    email: "nandhini@gmail.com",
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

// Named export for useUser hook
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserContextProvider");
  }
  return context;
};

// Named export for UserProfile component
export const UserProfile: React.FC = () => {
  const user = useUser();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};
