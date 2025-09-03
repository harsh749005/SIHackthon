import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Database,
  AudioLines
} from 'lucide-react';

export default function ChatGPTUI() {
  const [showAddOptions, setShowAddOptions] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const handleAddClick = () => {
    setShowAddOptions(!showAddOptions);
  };

  const handleLiveDataClick = () => {
    const newTag = 'Live Data';
    if (!selectedTags.includes(newTag)) {
      setSelectedTags([...selectedTags, newTag]);
    }
    setShowAddOptions(false);
  };

  const removeTag = (tagToRemove) => {
    setSelectedTags(selectedTags.filter(tag => tag !== tagToRemove));
  };

  const styles = {
    container: {
      height: '100vh',
      backgroundColor: '#ffffff',
      display: 'flex',
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
      justifyContent: 'space-between',
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
      justifyContent: 'center'
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
      borderRadius: '50px',
      border: '1px solid #d1d5db',
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
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
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: '8px',
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
      flexWrap: 'wrap'
    },
    tag: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      backgroundColor: '#e3f2fd',
      color: '#1565c0',
      padding: '4px 8px',
      borderRadius: '16px',
      fontSize: '12px',
      fontWeight: '500'
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

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        {/* Header */}
        <div style={styles.header}>
          <div>
            <span style={styles.logo}>DataBloder</span>
          </div>
        </div>

        {/* Sidebar Buttons */}
        <div style={styles.sidebarButtons}>
          {/* Search Button */}
          <div 
            style={styles.sidebarButton}
            onMouseEnter={(e) => {
              Object.assign(e.target.style, styles.sidebarButtonHover);
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = styles.sidebarButton.backgroundColor;
              e.target.style.transform = 'none';
            }}
          >
            <Search size={18} color="#6c757d" />
            <span>Search</span>
          </div>
          
          {/* New Chat Button */}
          <div 
            style={styles.sidebarButton}
            onMouseEnter={(e) => {
              Object.assign(e.target.style, styles.sidebarButtonHover);
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = styles.sidebarButton.backgroundColor;
              e.target.style.transform = 'none';
            }}
          >
            <Plus size={18} color="#6c757d" />
            <span>New Chat</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Chat Content */}
        <div style={styles.chatContent}>
          <div style={styles.welcomeText}>
            <h1 style={styles.mainTitle}>
              What's on your mind today?
            </h1>
            <p style={styles.subtitle}>
              Hey there! What can I do for you?
            </p>
          </div>
        </div>

        {/* Input Area */}
        <div style={styles.inputArea}>
          <div style={styles.inputContainer}>
            {/* Add Options Dropdown */}
            {showAddOptions && (
              <div style={styles.dropdown}>
                <button
                  style={styles.dropdownButton}
                  onClick={handleLiveDataClick}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f3f4f6';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  <Database size={16} color="#3b82f6" />
                  <span>Live Data</span>
                </button>
              </div>
            )}

            {/* Input Container */}
            <div style={styles.inputWrapper}>
              {/* Add Button */}
              <button
                style={styles.addButton}
                onClick={handleAddClick}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e8eaed';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f1f3f4';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <Plus size={18} color="#5f6368" />
              </button>

              {/* Input Field */}
              <div style={{ flex: '1' }}>
                <div style={styles.tagsContainer}>
                  {/* Selected Tags */}
                  {selectedTags.map((tag, index) => (
                    <div key={index} style={styles.tag}>
                      <Database size={12} color="#1565c0" />
                      <span>{tag}</span>
                      <span 
                        style={styles.tagRemove}
                        onClick={() => removeTag(tag)}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#c62828';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#1565c0';
                        }}
                      >
                        ×
                      </span>
                    </div>
                  ))}
                  
                  {/* Input */}
                  <input
                    type="text"
                    placeholder={selectedTags.length > 0 ? "Continue your message..." : "Ask anything"}
                    style={styles.input}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
              </div>

              {/* Right Side Icons */}
              <div style={styles.rightIcons}>
                <button 
                  style={styles.iconButton}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f3f4f6';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  <AudioLines size={18} color="#6c757d" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}