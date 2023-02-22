import { addHours } from "date-fns";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useUiStore } from "../../hooks/useUiStore";

export const FabAddNew = () => {

    const {openDateModal} = useUiStore();
    const {setActiveEvent} = useCalendarStore();

    const handleClickNew = () => {
        setActiveEvent({
            title: '',
            notes: '',
            bgColor: '#fafafa',
            user: {
                _id: '123',
                name: 'Joaco'
            }
        })
        openDateModal();
    };

    return (
        <button
            className="btn btn-primary fab"
            onClick={handleClickNew}
        >
            <i className="fas fa-plus"></i>
        </button>
    );
}