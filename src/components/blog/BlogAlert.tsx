import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface BlogAlertProps {
  children: React.ReactNode;
  title?: string;
}

export function BlogAlert({ children, title = "Heads up!" }: BlogAlertProps) {
  return (
    <Alert variant="destructive">
      <div className="items-center">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle className="ml-2 inline-flex">{title}</AlertTitle>
      </div>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
