import "./styles.scss";
import React, {useRef, useState} from "react";
import {IconSearch} from "@assets/icons";
import {Flex, Input, List} from "antd";
import useClickOutside from "@hook/useClickOutside.tsx";
import {useLocalStorage} from "@hook/useLocalStorage.tsx";

const ClearIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
         viewBox="0 0 24 24" fill="none">
        <path d="M8 16L16 8M16 16L8 8" stroke="#666666" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

enum DropdownState {
    Suggestion = 'Suggestion',
    History = 'History',
    None = 'None'
}

export const AutocompleteSearch = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [searchHistory, setSearchHistory] = useLocalStorage<string[]>("searchHistory", []);
    const [dropdownState, setDropdownState] = useState<DropdownState>(DropdownState.None);
    const containerRef = useRef<HTMLDivElement>(null);
    const staticSuggestions = ["Nhân viên phục  vụ", "Nhân viên bảo vệ", "Nhân viên thiết  kế", "Nhân viên bảo trì", "Nhân viên trợ lý"];

    useClickOutside<HTMLDivElement>(containerRef, () => setDropdownState(DropdownState.None));

    const filterSuggestions = (value: string): string[] => {
        if (value) {
            return staticSuggestions.filter(item => item.toLowerCase().includes(value.toLowerCase()));
        }
        return [];
    }

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
        if (value !== '') {
            setDropdownState(DropdownState.Suggestion);
        } else {
            setDropdownState(DropdownState.History);
        }
        setSuggestions(filterSuggestions(value));
    };

    const handleClickSearchInput = (e: React.MouseEvent) => {
        e.preventDefault();
        if (searchTerm) {
            setSuggestions(filterSuggestions(searchTerm));
            setDropdownState(DropdownState.Suggestion);
        } else {
            setDropdownState(DropdownState.History);
        }
    }

    const handleClickDropdownItem = (item: string) => {
        setSearchTerm(item);
        setDropdownState(DropdownState.None);
    }

    const handleRemoveHistory = (e: React.MouseEvent,historyToRemove: string) => {
        e.stopPropagation();
        setSearchHistory(prevHistory => prevHistory.filter(item => item !== historyToRemove));
    }

    const handleSearch = () => {
        setDropdownState(DropdownState.None);
        if (searchTerm.trim() === "") return;

        setSearchHistory(prevHistory => {
            const updatedHistory: string[] = [searchTerm, ...prevHistory.filter(item => item !== searchTerm)].slice(0, 5);
            return updatedHistory;
        })
    }

    const renderDropdownItem = (item: string, isHistory: boolean) => (
        <List.Item className="container-autocomplete-search__dropdown-item"
                   onClick={() => handleClickDropdownItem(item)}
                   style={{border: 'none', padding: '0.8rem'}}>
            <Flex align="center" gap="small" justify={isHistory ? "space-between" : "start"}
                  className="container-autocomplete-search__dropdown-content">
                {
                    !isHistory && (
                        <Flex align="center" justify="center"
                              className="container-autocomplete-search__dropdown-icon">
                            <IconSearch style={{color: 'white', width: '1.2rem', height: '1.2rem'}}/>
                        </Flex>
                    )
                }
                {item}
                {
                    isHistory && (
                        <button className="container-autocomplete-search__dropdown-btn-clear"
                                onClick={(e) => handleRemoveHistory(e, item)}>
                            <ClearIcon/>
                        </button>
                    )
                }
            </Flex>
        </List.Item>
    )

    return (
        <div className="container-autocomplete-search" ref={containerRef}>
            <Input id="search" placeholder="Tìm kiếm" allowClear
                   prefix={<IconSearch style={{color: '#0054A6'}}/>}
                   onClick={handleClickSearchInput}
                   onPressEnter={handleSearch}
                   onChange={e => handleSearchChange(e.target.value)} value={searchTerm}/>
            {
                dropdownState !== DropdownState.None && (
                    <div className="container-autocomplete-search__dropdown">
                        {
                            dropdownState === DropdownState.History && (
                                <div className="container-autocomplete-search__dropdown-title">Lịch sử tìm kiếm:</div>
                            )
                        }
                        <List
                            size="small"
                            dataSource={dropdownState === DropdownState.History ? searchHistory : suggestions}
                            renderItem={(item) => renderDropdownItem(item, dropdownState === DropdownState.History)}
                        />
                    </div>
                )
            }
        </div>
    );
};
const MemoizedAutocompleteSearch = React.memo(AutocompleteSearch);
export default MemoizedAutocompleteSearch;