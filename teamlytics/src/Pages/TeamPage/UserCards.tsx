import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import type {User} from "@/sdk";
import {Avatar} from "@/components/ui/avatar.tsx";
import {AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import {makeStyles} from "@griffel/react";

const useStyles = makeStyles({
    userCard: {
        display: "flex",
        flexDirection: "column",
    },
    header: {},
    title: {},
    subtext: {},
})



const UserCard = ({user}: { user: User }) => {
    const styles = useStyles();

    return (
        <Card className={styles.userCard}>
            <CardHeader className={styles.header}>
                <Avatar>
                    <AvatarImage
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle>
                    {`${user.first_name} ${user.last_name}`}
                </CardTitle>
                <CardDescription>
                    <div className={styles.subtext}>{user.role}</div>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className={styles.subtext}>{user.context_field}</div>
            </CardContent>
        </Card>
    );
};

export default UserCard