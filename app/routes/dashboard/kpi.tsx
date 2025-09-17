import { FaEdit } from "react-icons/fa";
import type { Route } from "./+types/settings";
import { Button, Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "kpi" },
  ];
}

export default function KPIPage() {
  const [goalModalOpen, SetGoalModalOpen] = useState(false);


  return (
    <div className="h-screen w-full">
      <div className="flex h-1/6 w-full flex-col">
        <div className="flex h-1/3 bg-amber-400 text-4xl p-2 font-bold">KPI</div>
        <div className="flex h-2/3 bg-neutral-800 m-2 rounded-3xl p-2">
          <div className="flex w-1/2 flex-col">
            <p className="text-3xl font-bold">Goal for this month:</p>
            <div className="flex flex-row gap-2 items-center">
              <p>Testing</p>
              <FaEdit className="hover:underline cursor-pointer" onClick={()=> SetGoalModalOpen(true)}/>
              <Dialog open={goalModalOpen} onClose={()=> SetGoalModalOpen(false)}>
                <DialogTitle>Set Your Goals</DialogTitle>
                <DialogContent>
                  <p>This adna ougba oifbasb dfoasblf uoaw builfbaw ilfasdbvcjba slfbjas fblwbek fdf</p>
                  <div className="flex justify-end">
                    <Button>Save</Button>
                    <Button onClick={()=>SetGoalModalOpen(false)}>Close</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-5/6 w-full">
        <div className="flex w-1/2 h-full bg-blue-400"></div>
        <div className="flex w-1/2 h-full flex-col">
          <div className="flex w-full h-3/6 bg-fuchsia-600"></div>
          <div className="flex w-full h-3/6 bg-emerald-600"></div>
        </div>
      </div>
    </div>
  );
}
