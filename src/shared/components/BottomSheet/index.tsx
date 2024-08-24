import "./styles.scss";
import {Sheet} from "react-modal-sheet";
import React from "react";

interface BottomSheetProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const BottomSheet = (props: BottomSheetProps) => {
    return (
        <Sheet isOpen={props.isOpen} onClose={props.onClose}
               detent="content-height">
            <Sheet.Container>
                <Sheet.Header/>
                <Sheet.Content>
                    <div className="bottom-sheet">
                        {props.children}
                    </div>
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop onTap={props.onClose}/>
        </Sheet>
    );
};

export default BottomSheet;