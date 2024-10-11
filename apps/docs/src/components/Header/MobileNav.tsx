import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { SideMenu } from "@/components/SideMenu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <Button variant="outline">
          <Menu />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="p-4 overflow-auto" onClick={() => setOpen(false)}>
          <SideMenu />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
