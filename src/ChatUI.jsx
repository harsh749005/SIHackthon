import React, { useState } from "react";
import { Plus, Search, Database, AudioLines, Phone, Image } from "lucide-react";
import Logo from "./assets/logo.png";
import { styles } from "./assets/styles/ChatUI";

export default function ChatUI() {
  const [showAddOptions, setShowAddOptions] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const handleAddClick = () => {
    setShowAddOptions(!showAddOptions);
  };

  const handleLiveDataClick = () => {
    const newTag = "Live Data";
    if (!selectedTags.includes(newTag)) {
      setSelectedTags([...selectedTags, newTag]);
    }
    setShowAddOptions(false);
  };

  const removeTag = (tagToRemove) => {
    setSelectedTags(selectedTags.filter((tag) => tag !== tagToRemove));
  };
  const recentsCats = [
    {
      chat: "What is ground water level in Vadodara ? ",
    },
    {
      chat: "Ground water level in Vodadara is critical",
    },
    {
      chat: "How Image processing work ?",
    },
  ];

  return (
    <div style={styles.container}>
      <div
        style={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "40px",
          paddingLeft: "40px",
          backgroundColor: "transparent",
          borderColor: "#e5e5e5",
          borderBottomWidth: "1px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={Logo} width={55} height={55} />
          <div>
            <span
              style={{
                fontFamily: "poppins",
                fontSize: "16px",
                fontWeight: "bold",
                color:"#0968bd"
              }}
            >
              SMART ASSISTANT
            </span>
          </div>
        </div>
        <div
          style={{
            width: "max-content",
            display: "flex",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "8px 20px 8px 20px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              borderColor: "#e5e5e5",
              borderRadius: "50px",
              borderWidth: "1px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image size={18} color="#6c757d" />
            </div>
            <span style={{ fontSize: "14px" }}>Search by image</span>
          </div>
          <div
            style={{
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              borderColor: "#e5e5e5",
              width: "40px",
              height: "40px",
              borderRadius: "50px",
              borderWidth: "1px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* backgroundColor:"#3cf04b" color='#fff' */}
            <Phone size={18} color="#6c757d" />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexGrow: 1 }}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          {/* Header */}
          {/* <div style={styles.header}>
            <img src={Logo} width={150} height={150}/>
          <div>
            <span style={styles.logo}>SAHYOG</span>
          </div>
        </div> */}

          {/* Sidebar Buttons */}
          <div style={styles.sidebarButtons}>
            {/* Search Button */}
            <div
              style={styles.sidebarButton}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, styles.sidebarButtonHover);
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor =
                  styles.sidebarButton.backgroundColor;
                e.target.style.transform = "none";
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
                e.target.style.backgroundColor =
                  styles.sidebarButton.backgroundColor;
                e.target.style.transform = "none";
              }}
            >
              <Plus size={18} color="#6c757d" />
              <span>New Chat</span>
            </div>
            <div style={{marginTop:"20px"}}>
              <h1 style={{ fontWeight: "bold",fontSize:"22px" }}>Recent Chats</h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop:"10px"
                }}
              >
                {recentsCats.map((chats, index) => (
                  <div key={index}               onMouseEnter={(e) => {
                Object.assign(e.target.style, styles.sidebarButtonHover);
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor =
                  styles.sidebarButton.backgroundColor;
                e.target.style.transform = "none";
              }} style={styles.sidebarButton}>
                    <p style={{fontFamily:"poppins",fontWeight:""}}>

                    {chats.chat}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* Chat Content */}
          <div style={styles.chatContent}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={Logo} width={75} height={75} />
              {/* <div>
                <span
                  style={{
                    fontFamily: "poppins",
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "#0968bd",
                  }}
                >
                  SMART ASSISTANT
                </span>
              </div> */}
            </div>
            <div style={styles.welcomeText}>
              <h1 style={styles.mainTitle}>What's on your mind today?</h1>
              <p style={styles.subtitle}>Hey there! What can I do for you?</p>
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
                      e.target.style.backgroundColor = "#f3f4f6";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#f3f4f6";
                    }}
                  >
                    <Database size={16} color="#3b82f6"  />
                    <span>Live Data</span>
                  </button>
                </div>
              )}

              {/* Input Container */}
              <div style={styles.inputWrapper}>
                {/* Add Button */}
              <div style={{display:"flex",gap:"18px",flexDirection:"column"}}>

                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px"}}>

                <button
                  style={styles.addButton}
                  onClick={handleAddClick}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#e8eaed";
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#f1f3f4";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  <Plus size={18} color="#5f6368" />
                </button>

                {/* Input Field */}
                <div style={{ flex: "1" }}>
                  <div style={styles.tagsContainer}>
                    {/* Selected Tags */}
                    {/* {selectedTags.map((tag, index) => (
                      <div key={index} style={styles.tag}>
                        <Database size={12} color="#1565c0" />
                        <span>{tag}</span>
                        <span
                          style={styles.tagRemove}
                          onClick={() => removeTag(tag)}
                          onMouseEnter={(e) => {
                            e.target.style.color = "#c62828";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = "#1565c0";
                          }}
                        >
                          ×
                        </span>
                      </div>
                    ))} */}

                    {/* Input */}
                    <input
                      type="text"
                      placeholder={
                        selectedTags.length > 0
                          ? "Continue your message..."
                          : "Ask anything"
                      }
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
                      e.target.style.backgroundColor = "#4da9ff";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#0968bd";
                    }}
                  >
                    <AudioLines size={18} color="#FFF" style={{backgroundColor:"transparent"}} />
                  </button>
                </div>
                </div>
  {selectedTags.map((tag, index) => (
                      <div key={index} style={styles.tag}>
                        <Database size={12} color="#1565c0" />
                        <span>{tag}</span>
                        <span
                          style={styles.tagRemove}
                          onClick={() => removeTag(tag)}
                          onMouseEnter={(e) => {
                            e.target.style.color = "#c62828";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = "#1565c0";
                          }}
                        >
                          ×
                        </span>
                      </div>
                    ))}
                              
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
