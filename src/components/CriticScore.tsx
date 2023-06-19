import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 50 ? "yellow" : "gray";
  return (
    <Badge fontSize="14px" px={2} borderRadius={2} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
