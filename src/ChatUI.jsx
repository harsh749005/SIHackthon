import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Database,
  AudioLines
} from 'lucide-react';
import { styles } from './assets/styles/ChatUI';

export default function ChatUI() {
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

  

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        {/* Header */}
        <div style={styles.header}>
          <div>
            <span style={styles.logo}>ChatSphere</span>
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