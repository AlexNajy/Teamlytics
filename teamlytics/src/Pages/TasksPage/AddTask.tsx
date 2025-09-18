import {makeStyles} from '@griffel/react';
import {useState} from 'react';
import {format} from 'date-fns';
import {Calendar as CalendarIcon} from 'lucide-react';
import {useNavigate} from 'react-router-dom';
import {Button} from "@/Components/ui/button.tsx";
import {Input} from "@/Components/ui/input.tsx";
import {Label} from "@/Components/ui/label.tsx";
import {Textarea} from "@/Components/ui/textarea.tsx";
import {Calendar} from "@/Components/ui/calendar.tsx";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover.tsx";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select.tsx";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card.tsx";
import {createTask, TaskStatusEnum} from "@/Pages/TasksPage/hooks/CreateTask.tsx";


const useStyles = makeStyles({
    container: {
        minHeight: '100vh',
        backgroundColor: 'var(--background)',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem',
    },
    card: {
        width: '100%',
        maxWidth: '1000px',
        background: 'var(--card)',
        color: 'var(--foreground)',
        borderRadius: '1rem',
        boxShadow: '0 10px 15px -3px var(--shadow), 0 4px 6px -2px var(--shadow)',
        border: '1px solid var(--border)',
    },
    formGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem',
        marginBottom: '1.5rem'
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
    },
    formGroupFull: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        gridColumn: '1 / -1'
    },
    label: {
        fontSize: '0.875rem',
        fontWeight: '500',
        color: 'var(--foreground)',
    },
    field: {
        border: '1px solid var(--border)',
        backgroundColor: 'var(--background)',
        color: 'var(--muted-foreground)',
        borderRadius: '0.5rem',
        padding: '0.5rem 0.75rem',
        fontSize: '0.875rem',
        transition: 'all 0.2s ease',
        outline: 'none',
    },
    selectTrigger: {
        border: '1px solid var(--border)',
        backgroundColor: 'var(--background)',
        color: 'var(--muted-foreground)',
        borderRadius: '0.5rem',
        padding: '0.5rem 0.75rem',
        fontSize: '0.875rem',
        cursor: 'pointer',
    },
    datePicker: {
        border: '1px solid var(--border)',
        backgroundColor: 'var(--background)',
        color: 'var(--muted-foreground)',
        borderRadius: '0.5rem',
        padding: '0.5rem 0.75rem',
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
    },
    selectContent: {
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        border: '1px solid var(--border)',
        borderRadius: '0.5rem',
    },
    selectItem: {
        color: 'var(--foreground)',
        padding: '0.5rem 0.75rem',
        fontSize: '0.875rem',
        cursor: 'pointer',
    },
    icon: {
        marginRight: '0.5rem',
        height: '1rem',
        width: '1rem'
    }
});

const AddTask = () => {
    const styles = useStyles();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        status: TaskStatusEnum.Open,
        estimatedTime: 0,
        description: "",
        notes: "",
    });

    const [date, setDate] = useState<Date>();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const payload = {
                title: form.title,
                status: form.status as TaskStatusEnum,
                estimated_time: form.estimatedTime,
                desired_completion_date: date?.toISOString() ?? null,
                description: form.description,
                notes: form.notes || null,
            };

            const created = await createTask(payload);
            console.log("Task created:", created);

            setForm({
                title: "",
                status: TaskStatusEnum.Open,
                estimatedTime: 0,
                description: "",
                notes: "",
            });
            setDate(undefined);

            navigate('/tasks');
        } catch (err) {
            console.error("Error creating task", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.container}>
            <Card className={styles.card}>
                <CardHeader>
                    <CardTitle>Add New Task</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGrid}>

                            {/* title */}
                            <div className={styles.formGroup}>
                                <Label className={styles.label}>Title</Label>
                                <Input
                                    className={styles.field}
                                    placeholder="Enter task title..."
                                    value={form.title}
                                    onChange={(e) => setForm({...form, title: e.target.value})}
                                    required
                                />
                            </div>

                            {/* status */}
                            <div className={styles.formGroup}>
                                <Label className={styles.label}>Status</Label>
                                <Select
                                    value={form.status}
                                    onValueChange={(value) =>
                                        setForm({...form, status: value as TaskStatusEnum})
                                    }
                                    required
                                >
                                    <SelectTrigger className={styles.selectTrigger}>
                                        <SelectValue placeholder="Select status"/>
                                    </SelectTrigger>
                                    <SelectContent className={styles.selectContent}>
                                        <SelectItem className={styles.selectItem} value={TaskStatusEnum.Open}>Open</SelectItem>
                                        <SelectItem className={styles.selectItem} value={TaskStatusEnum.InProgress}>In Progress</SelectItem>
                                        <SelectItem className={styles.selectItem} value={TaskStatusEnum.Blocked}>Blocked</SelectItem>
                                        <SelectItem className={styles.selectItem} value={TaskStatusEnum.Completed}>Completed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* estimated time */}
                            <div className={styles.formGroup}>
                                <Label className={styles.label}>Estimated Time (hours)</Label>
                                <Input
                                    className={styles.field}
                                    type="number"
                                    min="0"
                                    step="0.1"
                                    placeholder="e.g. 2.5 for 2 hours and 30 minutes..."
                                    value={form.estimatedTime || ''}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setForm({
                                            ...form,
                                            estimatedTime: value === '' ? 0 : parseFloat(value)
                                        });
                                    }}
                                />
                            </div>

                            {/* desired completion date */}
                            <div className={styles.formGroup}>
                                <Label className={styles.label}>Desired Completion Date</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className={styles.datePicker}>
                                            <CalendarIcon className={styles.icon}/>
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className={styles.selectContent}>
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            {/* description */}
                            <div className={styles.formGroupFull}>
                                <Label className={styles.label}>Description</Label>
                                <Textarea
                                    className={`${styles.field} ${styles.textarea}`}
                                    placeholder="Enter task description..."
                                    rows={4}
                                    value={form.description}
                                    onChange={(e) =>
                                        setForm({...form, description: e.target.value})
                                    }
                                    required
                                />
                            </div>

                            {/* Notes */}
                            <div className={styles.formGroupFull}>
                                <Label className={styles.label}>Notes (optional)</Label>
                                <Textarea
                                    className={`${styles.field} ${styles.textarea}`}
                                    placeholder="Enter additional notes..."
                                    rows={3}
                                    value={form.notes}
                                    onChange={(e) =>
                                        setForm({...form, notes: e.target.value})
                                    }
                                />
                            </div>

                        </div>

                        <Button
                            className={styles.submitButton}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Creating...' : 'Add Task'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default AddTask;