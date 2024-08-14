import React, {useEffect, useRef, useState} from "react";
import {IconSearch} from "@assets/icons";
import {Flex, Input, InputRef, List} from "antd";

const AutocompleteSearch = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [searchHistory, setSearchHistory] = useState<string[]>(["Công Viên Văn Hóa Đầm Sen", "KDLST Vàm Sát", "Công Viên Văn Hóa Đầm Sen", "Công Viên Văn Hóa Đầm Sen"]);
    const [showSearchHistory, setShowSearchHistory] = useState<boolean>(false);
    const ref = useRef<InputRef>(null);

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
        if (value !== '') {
            setShowSearchHistory(false);
        } else {
            setShowSearchHistory(true);
        }

        const staticSuggestions = ["Nhân viên phục  vụ", "Nhân viên bảo vệ", "Nhân viên thiết  kế", "Nhân viên bảo trì", "Nhân viên trợ lý"];
        if (value) {
            setSuggestions(
                staticSuggestions.filter((item) =>
                    item.toLowerCase().includes(value.toLowerCase())
                )
            );
        } else {
            setSuggestions([]);
        }
    };

    const handleClickSearchInput = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowSearchHistory(true);
    }

    const handleSearch = () => {
        setShowSearchHistory(false);
    }

    const handleClickOutside = (event: MouseEvent) =>  {
        if (ref.current  && ref.current.input && !ref.current.input.contains(event.target as Node)) {
            setShowSearchHistory(false);
            setSuggestions([]);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div style={{width: '100%', position: 'relative', zIndex: '10'}}>
            <Input ref={ref} id="search" placeholder="Tìm kiếm" allowClear
                   prefix={<IconSearch style={{color: '#0054A6'}}/>}
                   onClick={handleClickSearchInput}
                   onPressEnter={handleSearch}
                   onChange={e => handleSearchChange(e.target.value)} value={searchTerm}/>
            {
                suggestions.length > 0 && (
                    <List
                        style={{
                            display: 'block',
                            position: 'absolute',
                            top: '100%',
                            width: '100%',
                            zIndex: '1050',
                            backgroundColor: 'white',
                            border: '1px solid #d9d9d9',
                            borderRadius: '4px',
                        }}
                        size="small"
                        dataSource={suggestions}
                        renderItem={(item) => (
                            <List.Item>
                                <Flex align="center" gap="small">
                                    <Flex align="center" justify="center" style={{
                                        height: '2.4rem',
                                        width: '2.4rem',
                                        background: 'rgba(194, 194, 194, 1)',
                                        borderRadius: '50%'
                                    }}>
                                        <IconSearch style={{color: 'white', width: '1.2rem', height: '1.2rem'}}/>
                                    </Flex>
                                    {item}
                                </Flex>
                            </List.Item>
                        )}
                    />
                )
            }

            {
                showSearchHistory && searchHistory.length > 0 && (
                    <List
                        style={{
                            display: 'block',
                            position: 'absolute',
                            top: '100%',
                            width: '100%',
                            zIndex: '1050',
                            backgroundColor: 'white',
                            border: '1px solid #d9d9d9',
                            borderRadius: '4px',
                        }}
                        size="small"
                        dataSource={searchHistory}
                        renderItem={(item) => (
                            <List.Item>
                                <Flex align="center" gap="small">
                                    {item}
                                </Flex>
                            </List.Item>
                        )}
                    />
                )
            }
        </div>
    );
};

export default AutocompleteSearch;