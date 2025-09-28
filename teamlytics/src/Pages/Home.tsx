import {makeStyles} from '@griffel/react';

const useStyles = makeStyles({
    container: {
        backgroundColor: 'var(--background)',
    },
    main: {
        flex: '1',
        padding: '1rem 5rem 2rem'
    },
    titleSection: {
        textAlign: 'center',
        marginBottom: '3rem',
        paddingTop: '4rem'
    },
    title: {
        fontSize: 'clamp(2.25rem, 5vw, 3rem)',
        fontWeight: 'bold',
        marginBottom: '3rem',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        opacity: 'transparent',
        color: 'var(--foreground)',
    },
    subTitle: {
        fontSize: '1.25rem',
        color: 'var(--muted-foreground)',
        maxWidth: '32rem',
        margin: '0 auto 2rem',
    },
    inputContainer: {
        position: 'relative',
        marginBottom: '3rem'
    },
    input: {
        position: 'relative',
        background: 'var(--card)',
        borderRadius: '1rem',
        boxShadow: '0 10px 15px -3px var(--shadow), 0 4px 6px -2px var(--shadow)',
        border: '1px solid var(--border)',
        overflow: 'hidden',
        transition: 'box-shadow 0.2s ease',
        ':hover': {
            boxShadow: '0 25px 25px -5px var(--shadow), 0 10px 10px -5px var(--shadow)'
        }
    },
    textarea: {
        width: '100%',
        padding: '1.5rem 1.5rem 1rem',
        fontSize: '1.125rem',
        color: 'var(--card-foreground)',
        backgroundColor: 'transparent',
        '::placeholder': {
            color: 'var(--muted-foreground)'
        },
        ':focus': {
            outline: 'none',
            ring: '0'
        }
    },
    inputFooter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1.5rem',
        background: 'var(--muted)',
        borderTop: '1px solid var(--border)'
    },
    sendButton: {
        padding: '0.5rem 1.5rem',
        background: 'var(--primary)',
        color: 'var(--card)',
        backgroundImage: 'linear-gradient(135deg, var(--primary), var(--secondary))',
        borderRadius: '0.5rem',
        fontWeight: '500',
        cursor: 'pointer',
        boxShadow: '0 1px 2px 0 var(--shadow)',
        opacity: '0.9',
        ':hover': {
            backgroundImage: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            color: 'var(--muted)',
            opacity: '1',
            boxShadow: '0 4px 6px -1px var(--shadow), 0 2px 4px -1px var(--shadow)'
        },
        ':disabled': {
            opacity: '0.5',
            cursor: 'not-allowed'
        }
    },
    footer: {
        marginTop: 'auto',
        padding: '1.5rem',
        textAlign: 'center'
    },
    subtext: {
        fontSize: '0.75rem',
        color: 'var(--muted-foreground)'
    }
});

const Home = () => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.titleSection}>
                    <h2 className={styles.title}>
                        Welcome to Teamlytics AI
                    </h2>
                    <p className={styles.subTitle}>
                        Your intelligent assistant for managing your workspace
                    </p>
                </div>

                <div className={styles.inputContainer}>
                    <div className={styles.input}>
                                <textarea
                                    placeholder="Message Teamlytics AI..."
                                    rows={3}
                                    className={styles.textarea}
                                />
                        <div className={styles.inputFooter}>
                            <div className={styles.subtext}>
                                Place buttons and important notice here. inputFooter/subtext
                            </div>
                            <button className={styles.sendButton}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <p className={styles.subtext}>
                    Teamlytics AI can make mistakes. Consider checking important information. footer/subtext.
                </p>
            </footer>
        </div>
    );
};

export default Home;