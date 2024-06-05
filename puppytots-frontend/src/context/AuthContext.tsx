import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";
import { auth } from "../config/firebaseConfig";

interface AuthContextType {
  user: User | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  isAuthInitializing: boolean;
  isBreeder: boolean; 
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  //user state
  const [user, setUser] = useState<User | null>(null);
  const [isAuthInitializing, setIsAuthInitializing] = useState<boolean>(true);

  const [isBreeder, setIsBreeder] = useState<boolean>(false); 

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      let result = await signInWithPopup(auth, provider);
      // await signInWithPopup(auth, provider);
      setUser(result.user)
      console.log("SET USER DURING SIGN OUT", result.user)
      if(result.user.email === "yangjm1287@gmail.com"){
        setIsBreeder(true); 
      }
    } catch (error: any) {
      console.log("Sign in Failed", error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      if(user?.email === "yangjm1287@gmail.com"){
        setIsBreeder(false); 
      }
      setUser(null)  
    } catch (error: any) {
      console.log("Error signing out", error);
    }
  };

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((currentUser) => {
  //     console.log(currentUser)
  //     setUser(currentUser);
  //     setIsAuthInitializing(false); 
  //     console.log("setUser", user)
  //     if(user?.email === "yangjm1287@gmail.com"){
  //       setIsBreeder(true); 
  //     }
  //   });
  //   return () => unsubscribe();
  // }, []);

  // whenever the component re-renders, set the user as to what it was
  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((currentUser) => {
          setUser(currentUser); 
          console.log("USE EFFECT SET CURRENT USER", user)
          setIsAuthInitializing(false); 
          if(user?.email === "yangjm1287@gmail.com"){
        setIsBreeder(true); 
      }
      }); 
      return () => unsubscribe(); 
  }, []); 

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isAuthInitializing, isBreeder }}>
      {children}
    </AuthContext.Provider>
  );
};
