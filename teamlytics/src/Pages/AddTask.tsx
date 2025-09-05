import { makeStyles } from '@griffel/react';
import { Button } from "@/Components/ui/button.tsx";
import { Input } from "@/Components/ui/input.tsx";
import { Label } from "@/Components/ui/label.tsx";
import { Textarea } from "@/Components/ui/textarea.tsx";
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

const useStyles = makeStyles({
    card: {
        background: 'var(--card)',
        color: 'var(--foreground)',
        borderRadius: '1rem',
        boxShadow: '0 10px 15px -3px var(--shadow), 0 4px 6px -2px var(--shadow)',
        border: '1px solid var(--border)',
        transition: 'box-shadow 0.3s ease',
        ':hover': {
            boxShadow: '0 25px 25px -5px var(--shadow), 0 10px 10px -5px var(--shadow)'
        }
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
    inputField: {
        border: '1px solid var(--border)',
        backgroundColor: 'var(--background)',
        color: 'var(--muted-foreground)',
        borderRadius: '0.5rem',
        padding: '0.5rem 0.75rem',
        fontSize: '0.875rem',
        transition: 'all 0.2s ease',
        outline: 'none',
        ':hover': {
            boxShadow: '0 4px 8px 2px var(--shadow)'
        },
        '::placeholder': {
            color: 'var(--muted-foreground)',
        }
    },
    selectField: {
        border: '1px solid var(--border)',
        backgroundColor: 'var(--background)',
        color: 'var(--muted-foreground)',
        borderRadius: '0.5rem',
        padding: '0.5rem 0.75rem',
        fontSize: '0.875rem',
        transition: 'all 0.2s ease',
        outline: 'none',
        cursor: 'pointer',
        ':hover': {
            boxShadow: '0 4px 8px 2px var(--shadow)'
        }
    },
    textareaField: {
        resize: 'vertical',
        minHeight: '4rem',
    },
    addButton: {
        padding: '0.75rem 2rem',
        color: 'var(--card)',
        backgroundImage: 'linear-gradient(135deg, var(--primary), var(--secondary))',
        borderRadius: '0.5rem',
        fontWeight: '500',
        opacity: '0.9',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: '0 1px 2px 0 var(--shadow)',
        ':hover': {
            backgroundImage: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            color: "var(--card)",
            opacity: '1',
            boxShadow: '0 4px 6px -1px var(--shadow), 0 2px 4px -1px var(--shadow)'
        }
    },
    selectContent: {
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        border: '1px solid var(--border)',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px -3px var(--shadow), 0 4px 6px -2px var(--shadow)',
    },
    selectItem: {
        color: 'var(--foreground)',
        padding: '0.5rem 0.75rem',
        fontSize: '0.875rem',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        ':hover': {
            backgroundColor: 'var(--muted)',
        },
        ':focus': {
            backgroundColor: 'var(--primary-transparent)',
            color: 'var(--foreground)',
        }
    }
});

const AddTask = () => {
    const styles = useStyles();

    return (
        <Card className={styles.card}>
            <CardHeader>
                <CardTitle>Add New Task</CardTitle>
            </CardHeader>
            <CardContent>
                <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                        <Label className={styles.label}>Task Title</Label>
                        <Input
                            className={styles.inputField}
                            placeholder="Enter task title..."
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <Label className={styles.label}>Task Type</Label>
                        <Select>
                            <SelectTrigger className={styles.selectField}>
                                <SelectValue placeholder="Select task type" />
                            </SelectTrigger>
                            <SelectContent className={styles.selectContent}>
                                <SelectItem className={styles.selectItem} value="development">Development</SelectItem>
                                <SelectItem className={styles.selectItem} value="design">Design</SelectItem>
                                <SelectItem className={styles.selectItem} value="research">Research</SelectItem>
                                <SelectItem className={styles.selectItem} value="meeting">Meeting</SelectItem>
                                <SelectItem className={styles.selectItem} value="documentation">Documentation</SelectItem>
                                <SelectItem className={styles.selectItem} value="testing">Testing</SelectItem>
                                <SelectItem className={styles.selectItem} value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className={styles.formGroup}>
                        <Label className={styles.label}>Estimated Time</Label>
                        <Select>
                            <SelectTrigger className={styles.selectField}>
                                <SelectValue placeholder="Select estimated time" />
                            </SelectTrigger>
                            <SelectContent className={styles.selectContent}>
                                <SelectItem className={styles.selectItem} value="15min">15 minutes</SelectItem>
                                <SelectItem className={styles.selectItem} value="30min">30 minutes</SelectItem>
                                <SelectItem className={styles.selectItem} value="1hour">1 hour</SelectItem>
                                <SelectItem className={styles.selectItem} value="2hours">2 hours</SelectItem>
                                <SelectItem className={styles.selectItem} value="4hours">4 hours</SelectItem>
                                <SelectItem className={styles.selectItem} value="1day">1 day</SelectItem>
                                <SelectItem className={styles.selectItem} value="2days">2 days</SelectItem>
                                <SelectItem className={styles.selectItem} value="1week">1 week</SelectItem>
                                <SelectItem className={styles.selectItem} value="custom">Custom</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className={styles.formGroupFull}>
                        <Label className={styles.label}>Description</Label>
                        <Textarea
                            className={`${styles.inputField} ${styles.textareaField}`}
                            placeholder="Enter task description..."
                            rows={4}
                        />
                    </div>
                </div>

                <Button className={styles.addButton}>
                    Add Task
                </Button>
            </CardContent>
        </Card>
    );
};

export default AddTask;