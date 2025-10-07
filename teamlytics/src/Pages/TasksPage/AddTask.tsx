import {z} from "zod";
import {type Task, TaskStatusEnum} from "@/sdk";
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
} from "@/Components/ui/form.tsx";
import {Input} from "@/Components/ui/input.tsx";
import {Button} from "@/Components/ui/button.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/Components/ui/select.tsx";
import {Popover, PopoverContent} from '@/Components/ui/popover';
import {PopoverTrigger} from "@/Components/ui/popover.tsx";
import {Calendar} from '@/Components/ui/calendar';
import {CalendarIcon} from 'lucide-react';
import {format} from "date-fns";
import {useCreateTask} from "@/Pages/TasksPage/hooks/PostTask.tsx";
import {makeStyles} from "@griffel/react";
import {useNavigate} from 'react-router-dom';


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
        color: 'var(--foreground)',
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
        gridTemplateColumns: '2fr 2fr',
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
            color: 'var(--muted-foreground)',
        },
    },
    selectTrigger: {
        border: '1px solid var(--border)',
        backgroundColor: 'var(--card)',
        color: 'var(--foreground)',
        borderRadius: '0.5rem',
        padding: '0.5rem 0.75rem',
        fontSize: '0.875rem',
        cursor: 'pointer',
    },
    calender: {
        border: '1px solid var(--border)',
        backgroundColor: 'var(--card)',
        color: 'var(--foreground)',
        borderRadius: '0.5rem',
        fontSize: '0.875rem',
        display: 'flex',
        justifyContent: 'flex-center',
        cursor: 'pointer',
    },
    textarea: {
        resize: 'vertical',
        minHeight: '4rem',
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
    selectContent: {
        backgroundColor: 'var(--card)',
        color: 'var(--foreground)',
        border: '1px solid var(--border)',
        borderRadius: '0.5rem',
    },
    selectItem: {
        color: 'var(--foreground)',
        padding: '0.5rem 0.75rem',
        fontSize: '0.875rem',
        cursor: 'pointer',
        transition: "all 0.2s ease",
        ':hover': {
            backgroundColor: 'var(--muted)',
        },
    },
});

export function niceStatuses(status: TaskStatusEnum): string {
    switch (status) {
        case TaskStatusEnum.OPEN:
            return 'Open'
        case TaskStatusEnum.IN_PROGRESS:
            return 'In Progress'
        case TaskStatusEnum.COMPLETED:
            return 'Completed'
        case TaskStatusEnum.BLOCKED:
            return 'Blocked'
        default:
            return status;
    }
}

const AddTask = () => {
    const styles = useStyles();
    const createTask = useCreateTask()
    const navigate = useNavigate();

    const defaultTask: Task = {
        title: "",
        description: "",
        status: TaskStatusEnum.OPEN,
        estimated_time: 0,
        desired_completion_date: new Date(),
        notes: null,
        assignee: null,
    }

    const TEMP_ASSIGNEES = ["Santi", "Luke", "Alex", "Arshya", "None"]

    const formSchema = z.object({
        title: z.string(),
        description: z.string(),
        status: z.enum(TaskStatusEnum),
        estimated_time: z.number(),
        desired_completion_date: z.date(),
        notes: z.string().nullable(),
        assignee: z.string().nullable(),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ...defaultTask
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        createTask.createTask(values).then(r =>
            console.log("Completed Task Returned:", r))
        navigate("/tasks");
    }


    return (
        <div className={styles.container}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
                    <div className={styles.Title}> Add a Task</div>

                    <div className={styles.column}>
                        <FormField name={"title"} render={({field}) => (
                            <FormItem className={styles.formItem}>
                                <FormLabel className={styles.label}>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder={"This is a title..."} {...field}
                                           required
                                           className={`${styles.field} 
                                           border-0 focus:border-0 focus-visible:ring-0 focus-visible:outline-none`}/>
                                </FormControl>
                                <FormDescription className={styles.subText}>
                                    A short, descriptive title for the task
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                        <FormField name={"description"} render={({field}) => (
                            <FormItem className={styles.formItem}>
                                <FormLabel className={styles.label}>Description</FormLabel>
                                <FormControl>
                                    <Input placeholder={"This is a description..."} {...field}
                                           required
                                           className={`${styles.field} 
                                           border-0 focus:border-0 focus-visible:ring-0 focus-visible:outline-none`}/>
                                </FormControl>
                                <FormDescription className={styles.subText}>
                                    A detailed description of the task
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                    </div>
                    <div className={styles.grid}>
                        <FormField name={"estimated_time"} render={({field}) => (
                            <FormItem className={styles.formItem}>
                                <FormLabel className={styles.label}>Estimated Time</FormLabel>
                                <FormControl>
                                    <Input
                                        className={styles.field}
                                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                        type="number"
                                        min="0"
                                        step="0.25"
                                        required
                                        value={field.value}
                                    />
                                </FormControl>
                                <FormDescription className={styles.subText}>
                                    Time to complete the task in hours (e.g. 1.5 for 1 hour and 30 minutes)
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                        <FormField name={"desired_completion_date"} render={({field}) => (
                            <FormItem className={styles.formItem}>
                                <FormLabel className={styles.label}>Desired Completion Date</FormLabel>
                                <FormControl>
                                    <Popover>
                                        <PopoverTrigger asChild className={styles.selectTrigger}>
                                            <Button
                                                variant="outline"
                                                data-empty={!field.value}
                                                className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
                                            >
                                                <CalendarIcon/>
                                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className={styles.calender}>
                                            <Calendar mode="single" selected={field.value} onSelect={field.onChange}/>
                                        </PopoverContent>
                                    </Popover>
                                </FormControl>
                                <FormDescription className={styles.subText}>
                                    Desired date for task completion
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                        <FormField name={"status"} render={({field}) => (
                            <FormItem className={styles.formItem}>
                                <FormLabel className={styles.label}>Status</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className={`${styles.selectTrigger} 
                                       border-0 focus:border-0 focus-visible:ring-0 focus-visible:outline-none`}>
                                            <SelectValue placeholder="Select status"/>
                                        </SelectTrigger>
                                        <SelectContent className={styles.selectContent}>
                                            {Object.values(TaskStatusEnum).map((status) => (
                                                <SelectItem key={status} value={status} className={styles.selectItem}>
                                                    {niceStatuses(status)}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormDescription className={styles.subText}>
                                    Current status of the task
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                        <FormField name={"assignee"} render={({field}) => (
                            <FormItem className={styles.formItem}>
                                <FormLabel className={styles.label}>Assignee</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                                        <SelectTrigger className={`${styles.selectTrigger} 
                                       border-0 focus:border-0 focus-visible:ring-0 focus-visible:outline-none`}>
                                            <SelectValue placeholder="Select assignee"/>
                                        </SelectTrigger>
                                        <SelectContent className={styles.selectContent}>
                                            {TEMP_ASSIGNEES.map((assignee) => (
                                                <SelectItem key={assignee} value={assignee}
                                                            className={styles.selectItem}>
                                                    {assignee}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormDescription className={styles.subText}>
                                    Person responsible for the task
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                    </div>
                    <FormField name={"notes"} render={({field}) => (
                        <FormItem className={styles.formItem}>
                            <FormLabel className={styles.label}>Notes</FormLabel>
                            <FormControl>
                                <Input placeholder={"Additional notes..."} {...field}
                                       className={`${styles.field} 
                                       border-0 focus:border-0 focus-visible:ring-0 focus-visible:outline-none`}
                                       value={field.value || undefined}/>
                            </FormControl>
                            <FormDescription className={styles.subText}>
                                Any additional notes or comments about the task
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />

                    <Button type={"submit"} className={styles.submitButton}>
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    )


};

export default AddTask;