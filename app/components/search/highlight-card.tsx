import { Card, Text, Metric } from "@tremor/react";
import { ReactNode } from "react";

export const HighlightCard = ({
  title,
  children,
  footer,
}: {
  title: string;
  children: ReactNode;
  footer?: string;
}) => (
  <Card className="flex flex-col justify-between items-center gap-y-4">
    <Metric className="!text-lg text-center font-medium">{title}</Metric>
    {children}
    {footer && <Text className="text-center">{footer}</Text>}
  </Card>
);
