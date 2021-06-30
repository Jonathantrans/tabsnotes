import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddTask } from '../AddTask';
import {
  HiOutlinePencilAlt
} from 'react-icons/hi';
import {
  FaRegLightbulb
} from 'react-icons/fa';

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  let iconStyles = { color: "black", fontSize: ".8em" };
  return (
    <header className="header" data-testid="header">
      <nav>
        <div data-aos="fade-right" data-aos-duration="1000" className="logo">
          <img src="/images/favicon.png" alt="Tabs" />
        </div>
        <div className="settings">
          <ul>
            <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700" className="settings__add">
              <button
                data-testid="quick-add-task-action"
                aria-label="Quick add task"
                type="button"
                onClick={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
              >
                <span>
                  <HiOutlinePencilAlt style={iconStyles}/>
                  </span>
              </button>
            </li>
            <li data-aos="fade-in" data-aos-duration="1100" data-aos-delay="1500" className="settings__darkmode">
              <button
                data-testid="dark-mode-action"
                aria-label="Darkmode on/off"
                type="button"
                onClick={() => setDarkMode(!darkMode)}
              >
                <span><FaRegLightbulb/></span>
                {/* 💡 */}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
