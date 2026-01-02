interface Props {
    isOnline: boolean;
}


const Status = ({ isOnline }: Props) => {
    
    const color = isOnline ? "green" : "red";
    return (
        <p style={{ color }}>
            {isOnline ? "🟢 Online" : "🔴 Offline"}
        </p>

    )
}

export default Status;