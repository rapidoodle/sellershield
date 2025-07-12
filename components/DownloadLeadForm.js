import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DownloadLeadForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    // TODO: Connect to email tool or Google Sheet
    alert(`Thanks ${data.email}! Your download is ready.`);
    window.open("/downloads/sellershield-checklist.pdf", "_blank");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
      <Input
        type="email"
        placeholder="Enter your email to get the checklist"
        {...register("email", { required: true })}
      />
      <Button type="submit" className="w-full">Download Now</Button>
    </form>
  );
}