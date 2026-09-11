import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import {useTheme} from "next-themes";

export default function ModeToggle() {
    const {theme, setTheme} = useTheme();
    const [systemTheme, setSystemTheme] = useState('light') ;

    useEffect(()=>{
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e) => { setSystemTheme(e.matches ? 'dark' : 'light')};

        mediaQuery.addEventListener('change', handleChange);

        return() => mediaQuery.removeEventListener('change' , handleChange)

    },[]);


    const SWITCH = () => {
        console.log("switch working");
        switch(theme) {
            case "light": {
                setTheme("dark"); 
                return;
             }
            case "dark":{
                setTheme("light");
                return;
            }
            case "system": {
                setTheme(systemTheme === "light" ? "dark" : "light");
                return;
            }
            default: {
                return;
            }
        }
    };

  return (
    <button
      onClick={SWITCH}
      className="size-4 flex items-center justify-center relative cursor-pointer"
    >
      <SunIcon
        size={16}
        className="rotate-0 scale-100 transition-all duration-200 dark:rotate-90 dark:scale-0 absolute inset-0"
      />
      <MoonIcon
        size={16}
        className="rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100 absolute inset-0"
      />
    </button>
  );
}
