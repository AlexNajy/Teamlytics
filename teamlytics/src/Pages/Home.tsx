import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
    container: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #dbeafe 50%, #e0e7ff 100%)'
    },
    main: {
        flex: '1',
        padding: '0 1.5rem 2rem'
    },
    contentWrapper: {
        maxWidth: '64rem',
        margin: '0 auto'
    },
    heroSection: {
        textAlign: 'center',
        marginBottom: '3rem',
        paddingTop: '4rem'
    },
    heroTitle: {
        fontSize: 'clamp(2.25rem, 5vw, 3rem)',
        fontWeight: 'bold',
        marginBottom: '1.5rem',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        opacity: 'transparent'
    },
    heroDescription: {
        fontSize: '1.25rem',
        color: '#4b5563',
        maxWidth: '32rem',
        margin: '0 auto 2rem',
    },
    inputSection: {
        marginBottom: '3rem'
    },
    inputContainer: {
        position: 'relative'
    },
    inputWrapper: {
        position: 'relative',
        background: 'white',
        borderRadius: '1rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e5e7eb',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease',
        ':hover': {
            boxShadow: '0 25px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }
    },
    textarea: {
        width: '100%',
        padding: '1.5rem 1.5rem 1rem',
        fontSize: '1.125rem',
        color: '#1f2937',
        backgroundColor: 'transparent',
        '::placeholder': {
            color: '#6b7280'
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
        background: '#f9fafb',
        borderTop: '1px solid #f3f4f6'
    },
    inputHint: {
        fontSize: '0.75rem',
        color: '#6b7280'
    },
    sendButton: {
        padding: '0.5rem 1.5rem',
        background: 'linear-gradient(135deg, #3b82f6, #9333ea)',
        color: 'white',
        borderRadius: '0.5rem',
        fontWeight: '500',
        cursor: 'pointer',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        ':hover': {
            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
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
    footerText: {
        fontSize: '0.75rem',
        color: '#6b7280'
    }
});

const AIHomepage = () => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.contentWrapper}>
                    {/* Hero Section */}
                    <div className={styles.heroSection}>
                        <h2 className={styles.heroTitle}>
                            Welcome to Teamlytics AI
                        </h2>
                        <p className={styles.heroDescription}>
                            Your intelligent assistant for managing your workspace
                        </p>
                    </div>

                    {/* Chat Input */}
                    <div className={styles.inputSection}>
                        <div className={styles.inputContainer}>
                            <div className={styles.inputWrapper}>
                                <textarea
                                    placeholder="Message Teamlytics AI..."
                                    rows={4}
                                    className={styles.textarea}
                                />
                                <div className={styles.inputFooter}>
                                    <div className={styles.inputHint}>
                                        Press Enter to send, Shift+Enter for new line
                                    </div>
                                    <button className={styles.sendButton}>
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.contentWrapper}>
                    <p className={styles.footerText}>
                        Teamlytics AI can make mistakes. Consider checking important information.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default AIHomepage;