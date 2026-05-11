import AuthShell from "@/components/auth/AuthShell";

export const metadata = {
  title: "Log in — iNGen",
  description: "Sign in to your iNGen account.",
};

export default function LoginPage() {
  return <AuthShell mode="login" />;
}
