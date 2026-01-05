interface Props {
    isOnline: boolean;
}


const Status = ({ isOnline }: Props) => {

    const color = isOnline ? "green" : "red";
    return (
        <p style={{ color }}>
            {isOnline
                ? "🟢 You are currently Online !"
                : "🔴 You are currently Offline !"
            }
        </p>

    )
};

export default Status;