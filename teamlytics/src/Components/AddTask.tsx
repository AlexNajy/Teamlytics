import { makeStyles } from '@griffel/react';
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

const useStyles = makeStyles({
    card: {
        background: 'white',
        borderRadius: '1rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e5e7eb',
        transition: 'box-shadow 0.3s ease',
        ':hover': {
            boxShadow: '0 25px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
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
        color: '#374151'
    },
    addButton: {
        padding: '0.75rem 2rem',
        color: 'white',
        borderRadius: '0.5rem',
        fontWeight: '500',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        ':hover': {
            background: '#111827',
            color: "lightgray",
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
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
                        <Input placeholder="Enter task title..." />
                    </div>

                    <div className={styles.formGroup}>
                        <Label className={styles.label}>Task Type</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select task type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="development">Development</SelectItem>
                                <SelectItem value="design">Design</SelectItem>
                                <SelectItem value="research">Research</SelectItem>
                                <SelectItem value="meeting">Meeting</SelectItem>
                                <SelectItem value="documentation">Documentation</SelectItem>
                                <SelectItem value="testing">Testing</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className={styles.formGroup}>
                        <Label className={styles.label}>Estimated Time</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select estimated time" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="15min">15 minutes</SelectItem>
                                <SelectItem value="30min">30 minutes</SelectItem>
                                <SelectItem value="1hour">1 hour</SelectItem>
                                <SelectItem value="2hours">2 hours</SelectItem>
                                <SelectItem value="4hours">4 hours</SelectItem>
                                <SelectItem value="1day">1 day</SelectItem>
                                <SelectItem value="2days">2 days</SelectItem>
                                <SelectItem value="1week">1 week</SelectItem>
                                <SelectItem value="custom">Custom</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className={styles.formGroupFull}>
                        <Label className={styles.label}>Description</Label>
                        <Textarea
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