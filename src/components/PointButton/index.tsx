import nutriendtsIcon from "@/assets/pointButton/nutrients.png";
import sunIcon from "@/assets/pointButton/sun.png";
import waterIcon from "@/assets/pointButton/water.png";

import { Text } from "../Text";
import * as Styles from "./index.style";

export interface PointButtonProps {
    variant: "water" | "sun" | "nutrients";
    onClick?: () => void;
}

export const PointButton = (props: PointButtonProps) => {
    const iconList = {
        water: waterIcon,
        sun: sunIcon,
        nutrients: nutriendtsIcon,
    };

    const pointList = {
        water: 10,
        sun: 20,
        nutrients: 40,
    };

    const actionList = {
        water: "물주기",
        sun: "햇빛 쐬기",
        nutrients: "영양분",
    };

    return (
        <Styles.Container>
            <Styles.Button onClick={props.onClick}>
                {actionList[props.variant]}
                <Styles.Icon src={iconList[props.variant]} alt={props.variant} />
            </Styles.Button>
            <Text size="s" weight="normal" color="gray">
                {pointList[props.variant]} point
            </Text>
        </Styles.Container>
    );
};
