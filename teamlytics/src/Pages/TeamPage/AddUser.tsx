import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form} from "@/components/ui/form.tsx";
import {Button} from "@/components/ui/button.tsx";
import {makeStyles} from "@griffel/react";
import {useNavigate} from 'react-router-dom';
import {toast} from "sonner"
import {useCreateUser} from "@/Pages/TeamPage/hooks/PostUser.tsx";

const useStyles = makeStyles({
    container: {
        backgroundColor: 'var(--background)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '10rem',
    },
    form: {
        width: '100%',
        background: 'var(--card)',
        borderRadius: '1rem',
        boxShadow: '0 10px 15px -3px var(--shadow), 0 4px 6px -2px var(--shadow)',
        border: '1px solid var(--border)',
        padding: '1rem',
    },
    submitButton: {
        padding: '0.75rem 2rem',
        color: 'var(--card)',
        backgroundImage: 'linear-gradient(135deg, var(--primary), var(--secondary))',
        borderRadius: '0.5rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        opacity: '0.9',
        ':hover': {
            color: 'var(--muted)',
            opacity: '1',
            boxShadow: '0 4px 6px -1px var(--shadow), 0 2px 4px -1px var(--shadow)'
        },
        ':disabled': {
            opacity: '0.5',
            cursor: 'not-allowed'
        }
    },
    toast: {
        backgroundColor: 'var(--card)',
        color: 'var(--foreground)',
        border: '1px solid var(--border)',
        borderRadius: '0.5rem',
        fontSize: '0.875rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 10px 15px -3px var(--shadow), 0 4px 6px -2px var(--shadow)',
    },
});

const AddUser = () => {
    const styles = useStyles();
    const navigate = useNavigate();
    const createUser = useCreateUser();

    const defaultUser = {
        role: "Marketing Director",
        first_name: "John",
        last_name: "Doe",
        context_field: "string"
    }

    const formSchema = z.object({
        role: z.string(),
        first_name: z.string(),
        last_name: z.string(),
        context_field: z.string(),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultUser
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        createUser.createUser(values).then(r =>
            console.log("Completed User Returned:", r))

        console.log("Creating user:", values);

        toast("User created", {
            description: `${values.first_name} ${values.last_name}`,
            className: styles.toast,
        });

        navigate("/team");
    }

    return (
        <div className={styles.container}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
                    <Button type={"submit"} className={styles.submitButton}>
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    )
};

export default AddUser;