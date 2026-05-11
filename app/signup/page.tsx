import AuthShell from "@/components/auth/AuthShell";

export const metadata = {
  title: "Sign up — iNGen",
  description:
    "Create your iNGen account and rethink the way you source, engage, and hire talent.",
};

export default function SignupPage() {
  return <AuthShell mode="signup" />;
}
