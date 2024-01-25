import { Title as TremorTitle } from "@tremor/react";

export const Title = ({ value }: { value: string }) => (
  <TremorTitle className="font-bold dark:text-white text-black !text-2xl">
    {value}
  </TremorTitle>
);
