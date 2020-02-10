import React, {useState, useEffect} from 'react';

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMod = () => {
        setEditMode(true);
    };


    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div>
            {!editMode &&
            <span onClick={activateEditMod}>{props.status}</span>
            }
            {editMode &&
            <input autoFocus={true}
                   onBlur={deActivateEditMode}
                   onChange={onStatusChange}
                   value={status}/>
            }
        </div>

    )

};

export default ProfileStatus;