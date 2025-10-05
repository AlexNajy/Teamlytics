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
import { Calendar } from '@/Components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import {format} from "date-fns";
import {useCreateTask} from "@/Pages/TasksPage/hooks/PostTask.tsx";


// const useStyles = makeStyles({
//     container: {
//         backgroundColor: 'var(--background)',
//         display: 'flex',
//         justifyContent: 'center',
//         padding: '5rem',
//     },
//     card: {
//         width: '100%',
//         background: 'var(--card)',
//         color: 'var(--foreground)',
//         borderRadius: '1rem',
//         boxShadow: '0 10px 15px -3px var(--shadow), 0 4px 6px -2px var(--shadow)',
//         border: '1px solid var(--border)',
//     },
//     formGrid: {
//         display: 'grid',
//         gridTemplateColumns: '1fr 1fr',
//         gap: '1.5rem',
//         marginBottom: '1.5rem'
//     },
//     formGroup: {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '0.5rem'
//     },
//     formGroupFull: {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '0.5rem',
//         gridColumn: '1 / -1'
//     },
//     label: {
//         fontSize: '0.875rem',
//         fontWeight: '500',
//         color: 'var(--foreground)',
//     },
//     field: {
//         border: '1px solid var(--border)',
//         backgroundColor: 'var(--background)',
//         color: 'var(--muted-foreground)',
//         borderRadius: '0.5rem',
//         padding: '0.5rem 0.75rem',
//         fontSize: '0.875rem',
//         transition: 'all 0.2s ease',
//         outline: 'none',
//     },
//     selectTrigger: {
//         border: '1px solid var(--border)',
//         backgroundColor: 'var(--background)',
//         color: 'var(--muted-foreground)',
//         borderRadius: '0.5rem',
//         padding: '0.5rem 0.75rem',
//         fontSize: '0.875rem',
//         cursor: 'pointer',
//     },
//     datePicker: {
//         border: '1px solid var(--border)',
//         backgroundColor: 'var(--background)',
//         color: 'var(--muted-foreground)',
//         borderRadius: '0.5rem',
//         padding: '0.5rem 0.75rem',
//         fontSize: '0.875rem',
//         display: 'flex',
//         justifyContent: 'flex-center',
//         cursor: 'pointer',
//     },
//     textarea: {
//         resize: 'vertical',
//         minHeight: '4rem',
//     },
//     submitButton: {
//         padding: '0.75rem 2rem',
//         color: 'var(--card)',
//         backgroundImage: 'linear-gradient(135deg, var(--primary), var(--secondary))',
//         borderRadius: '0.5rem',
//         fontWeight: '500',
//         cursor: 'pointer',
//         transition: 'all 0.2s ease',
//         opacity: '0.9',
//         ':hover': {
//             color: 'var(--muted)',
//             opacity: '1',
//             boxShadow: '0 4px 6px -1px var(--shadow), 0 2px 4px -1px var(--shadow)'
//         },
//         ':disabled': {
//             opacity: '0.5',
//             cursor: 'not-allowed'
//         }
//     },
//     selectContent: {
//         backgroundColor: 'var(--background)',
//         color: 'var(--foreground)',
//         border: '1px solid var(--border)',
//         borderRadius: '0.5rem',
//     },
//     selectItem: {
//         color: 'var(--foreground)',
//         padding: '0.5rem 0.75rem',
//         fontSize: '0.875rem',
//         cursor: 'pointer',
//         transition: "all 0.2s ease",
//         ':hover': {
//             backgroundColor: 'var(--muted)',
//         },
//     },
//     icon: {
//         marginRight: '0.5rem',
//         height: '1rem',
//         width: '1rem'
//     }
// });

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
    // const styles = useStyles();
    const createTask = useCreateTask()

    const defaultTask: Task = {
        title: "",
        description: "",
        status: TaskStatusEnum.OPEN,
        estimated_time: 1,
        desired_completion_date: new Date(),
        notes: null,
        assignee: null,
    }

    const TEMP_ASSIGNEES = ["Santi", "Luke", "Alex", "Arshya"]

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
    }



    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField name={"title"} render={({field}) => (
                    <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                            <Input placeholder={"Task Title"} {...field} />
                        </FormControl>
                        <FormDescription>
                            A short, descriptive title for the task.
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>


                )}
                />
                <FormField name={"description"} render={({field}) => (
                    <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                            <Input placeholder={"This is a short description."} {...field} />
                        </FormControl>
                        <FormDescription>
                            A detailed description of the task.
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>


                )}
                />
                <FormField name={"status"} render={({field}) => (
                    <FormItem>
                        <FormLabel>Status</FormLabel>
                        <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.values(TaskStatusEnum).map((status) => (
                                        <SelectItem key={status} value={status}>
                                            {niceStatuses(status)}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormDescription>
                            Current status of the task.
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>


                )}
                />
                <FormField name={"estimated_time"} render={({field}) => (
                    <FormItem>
                        <FormLabel>Estimated Time</FormLabel>
                        <FormControl>
                            <Input
                                onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                type="number"
                                min="0"
                                step="0.25"
                                placeholder="1.5"
                                required
                                value={field.value}
                            />
                        </FormControl>
                        <FormDescription>
                            Estimated time to complete the task in hours (e.g. 1.5 for 1 hour and 30 minutes).
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField name={"desired_completion_date"} render={({field}) => (
                    <FormItem>
                        <FormLabel>Desired Completion Date</FormLabel>
                        <FormControl>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        data-empty={!field.value}
                                        className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
                                    >
                                        <CalendarIcon />
                                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar mode="single" selected={field.value} onSelect={field.onChange} />
                                </PopoverContent>
                            </Popover>
                        </FormControl>
                        <FormDescription>
                            Desired date for task completion.
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField name={"notes"} render={({field}) => (
                    <FormItem>
                        <FormLabel>Notes</FormLabel>
                        <FormControl>
                            <Input placeholder={"Additional notes..."} {...field} value={field.value || undefined} />
                        </FormControl>
                        <FormDescription>
                            Any additional notes or comments about the task.
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField name={"assignee"} render={({field}) => (
                    <FormItem>
                        <FormLabel>Assignee</FormLabel>
                        <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select assignee" />
                                </SelectTrigger>
                                <SelectContent>
                                    {TEMP_ASSIGNEES.map((assignee) => (
                                        <SelectItem key={assignee} value={assignee}>
                                            {assignee}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormDescription>
                            Person responsible for the task.
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <Button type={"submit"}>
                    Submit
                </Button>
            </form>
        </Form>
    )


};

export default AddTask;