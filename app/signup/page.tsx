import AuthShell from "@/components/auth/AuthShell";

export const metadata = {
  title: "Join the waiting list — iNGen",
  description:
    "Reserve your spot for iNGen — proof-first hiring built for teams who care about signal over noise.",
};

export default function WaitlistPage() {
  return <AuthShell mode="waitlist" />;
}
