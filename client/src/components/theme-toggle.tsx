import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (theme === "dark") {
      return <Moon className="h-4 w-4" />;
    }
    return <Sun className="h-4 w-4" />;
  };

  const getTitle = () => {
    if (theme === "light") return "Alternar para modo escuro";
    if (theme === "dark") return "Alternar para modo automático";
    return "Alternar para modo claro";
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      title={getTitle()}
      className="h-9 w-9 p-0 hover:bg-accent/50 transition-colors duration-200"
    >
      {getIcon()}
      <span className="sr-only">{getTitle()}</span>
    </Button>
  );
}