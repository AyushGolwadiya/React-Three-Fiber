import { useContext ,useState ,createContext} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ( {children} ) => {
    const [ color , setColor ] = useState("white");
    
    return(
    <ThemeContext.Provider value={{color , setColor}} >
        {children}
    </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext) ;
    if ( context === undefined) {
        throw new Error("Use theme must be used within a THEMEPROVIDER");
    }
    return context;
}