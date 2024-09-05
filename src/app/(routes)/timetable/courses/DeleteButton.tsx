"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  idStr: string;
  path: string;
  
}
export default function DeleteButton({
  idStr,
  path,
  className,
  ...others
}:ButtonProps) {
  const id = JSON.parse(idStr);
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/timetable${path}/${id}`, {method:"DELETE"});
      if (!res.ok) throw Error("An error has occurred!");
      alert("Item deleted successfully!");
      router.refresh();
    } catch (error: any) {
      alert("Error " + error.mrssage);
    }
  };
  return <Button variant={'destructive'} size={'lg'} className={cn(' hover:bg-slate-800',className)} onClick={handleDelete}>Delete</Button>;
}
