export const styles = {
    container: {
      height: '100vh',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection:"column",
      fontFamily: 'Space Grotesk, sans-serif'
    },
    sidebar: {
      width: '260px',
      backgroundColor: '#ffffff',
      borderRight: '1px solid #e5e5e5',
      display: 'flex',
      flexDirection: 'column'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:"column",
      padding: '16px',
      borderBottom: '1px solid #e5e5e5'
    },
    logo: {
      fontSize: '18px',
      fontWeight: '500',
      fontFamily: 'Poppins, sans-serif',
      color: '#000000'
    },
    sidebarButtons: {
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    sidebarButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      borderRadius: '8px',
      backgroundColor: '#f8f9fa',
      border: '1px solid #e9ecef',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontSize: '14px',
      color: '#495057',
      textDecoration: 'none'
    },
    sidebarButtonHover: {
      backgroundColor: '#e9ecef',
      transform: 'translateY(-1px)'
    },
    mainContent: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column'
    },
    chatContent: {
      flex: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:"column",
      gap:"20px"
    },
    welcomeText: {
      textAlign: 'center'
    },
    mainTitle: {
      fontFamily: 'Space Grotesk, sans-serif',
      fontSize: '32px',
      marginBottom: '8px',
      color: '#000000',
      fontWeight: 'bold'
    },
    subtitle: {
      fontFamily: 'Space Grotesk, sans-serif',
      color: '#b5b5b5',
      fontSize: '18px',
      margin: '0'
    },
    inputArea: {
      padding: '24px'
    },
    inputContainer: {
      maxWidth: '768px',
      margin: '0 auto',
      position: 'relative'
    },
    dropdown: {
      position: 'absolute',
      bottom: '100%',
      left: '16px',
      marginBottom: '8px',
      backgroundColor: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
      padding: '8px 0',
      minWidth: '128px',
      zIndex: 10
    },
    dropdownButton: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '8px 16px',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      fontSize: '14px',
      color: '#374151',
      transition: 'background-color 0.2s ease'
    },
    inputWrapper: {
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      borderRadius: '18px',
      border: '1px solid #d1d5db',
      padding: '12px 16px',
      // display: 'flex',
      // alignItems: 'center',
      // gap: '12px'
    },
    addButton: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: '#f1f3f4',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    },
    input: {
      flex: '1',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      fontSize: '16px',
      color: '#000000',
      fontFamily: 'Space Grotesk, sans-serif'
    },
    inputPlaceholder: {
      color: '#9ca3af'
    },
    rightIcons: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    iconButton: {
      padding: '8px',
      backgroundColor: '#0968bd',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    tagsContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      flexWrap: 'wrap',
    },
    tag: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      backgroundColor: '#e3f2fd',
      color: '#1565c0',
      padding: '4px 10px',
      borderRadius: '16px',
      fontSize: '12px',
      fontWeight: '500',
      width:"max-content"

    },
    tagRemove: {
      cursor: 'pointer',
      marginLeft: '4px',
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#1565c0',
      transition: 'color 0.2s ease'
    }
  };