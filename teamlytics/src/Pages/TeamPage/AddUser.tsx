import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
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
    formItem: {
        padding: '0.5rem 0.75rem',
        gap: '0.5rem',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
    },
    Title: {
        fontSize: '1.125rem',
        fontWeight: '600',
        color: 'var(--foreground)',
    },
    label: {
        fontSize: '0.875rem',
        fontWeight: '600',
        color: 'var(--foreground)',
    },
    subText: {
        fontSize: '0.875rem',
        fontWeight: '450',
        color: 'var(--muted-foreground)',
        textAlign: 'left',
    },
    field: {
        border: '1px solid var(--border)',
        backgroundColor: 'var(--card)',
        color: 'var(--foreground)',
        borderRadius: '0.5rem',
        fontSize: '0.875rem',
        transition: 'all 0.2s ease',
        '::placeholder': {
            color: 'var(--placeholder)',
        },
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
        first_name: "",
        last_name: "",
        role: "",
        context_field: ""
    }

    const formSchema = z.object({
        first_name: z.string().min(1, "First name is required"),
        last_name: z.string().min(1, "Last name is required"),
        role: z.string().min(1, "Role is required"),
        context_field: z.string(),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultUser
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        createUser.createUser(values).then(r =>
            console.log("Completed User Returned:", r))

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
                    <div className={styles.Title}>Add a User</div>

                    <div className={styles.grid}>
                        <FormField name="first_name" render={({field}) => (
                            <FormItem className={styles.formItem}>
                                <FormLabel className={styles.label}>First Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="John"
                                        {...field}
                                        required
                                        maxLength={50}
                                        autoComplete="off"
                                        className={`${styles.field} 
                                        border-0 focus:border-0 focus-visible:ring-0 focus-visible:outline-none`}
                                    />
                                </FormControl>
                                <FormDescription className={styles.subText}>
                                    User's first name (Max. 50 Characters)
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />

                        <FormField name="last_name" render={({field}) => (
                            <FormItem className={styles.formItem}>
                                <FormLabel className={styles.label}>Last Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Doe"
                                        {...field}
                                        required
                                        maxLength={50}
                                        autoComplete="off"
                                        className={`${styles.field} 
                                        border-0 focus:border-0 focus-visible:ring-0 focus-visible:outline-none`}
                                    />
                                </FormControl>
                                <FormDescription className={styles.subText}>
                                    User's last name (Max. 50 Characters)
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                    </div>

                    <div className={styles.column}>
                        <FormField name="role" render={({field}) => (
                            <FormItem className={styles.formItem}>
                                <FormLabel className={styles.label}>Role</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Marketing Director"
                                        {...field}
                                        required
                                        maxLength={100}
                                        autoComplete="off"
                                        className={`${styles.field} 
                                        border-0 focus:border-0 focus-visible:ring-0 focus-visible:outline-none`}
                                    />
                                </FormControl>
                                <FormDescription className={styles.subText}>
                                    User's role or job title (Max. 100 Characters)
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />

                        <FormField name="context_field" render={({field}) => (
                            <FormItem className={styles.formItem}>
                                <FormLabel className={styles.label}>Context Field</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Additional context..."
                                        {...field}
                                        autoComplete="off"
                                        maxLength={500}
                                        className={`${styles.field} 
                                        border-0 focus:border-0 focus-visible:ring-0 focus-visible:outline-none`}
                                    />
                                </FormControl>
                                <FormDescription className={styles.subText}>
                                    Additional information about the user (Max. 500 Characters)
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                    </div>

                    <Button type="submit" className={styles.submitButton}>
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    )
};

export default AddUser;