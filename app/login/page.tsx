import AuthShell from "@/components/auth/AuthShell";

export const metadata = {
  title: "Log in — iNGEN",
  description: "Sign in to your iNGEN account.",
};

export default function LoginPage() {
  return <AuthShell mode="login" />;
}
