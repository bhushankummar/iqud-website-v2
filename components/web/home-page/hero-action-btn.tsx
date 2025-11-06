import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";

export default function HeroActionBtn() {
  const springOptions = { bounce: 0.1 };

  return (
    <Magnetic
      intensity={0.2}
      springOptions={springOptions}
      actionArea="global"
      range={200}
    >
      <Button type="button">
        <Magnetic
          intensity={0.1}
          springOptions={springOptions}
          actionArea="global"
          range={200}
        >
          <span>Explore Our Services</span>
        </Magnetic>
      </Button>
    </Magnetic>
  );
}
