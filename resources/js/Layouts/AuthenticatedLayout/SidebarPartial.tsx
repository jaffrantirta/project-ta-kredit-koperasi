import Sidebar, { Item } from "@/Components/Sidebar";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SidebarPartial({ menus }: { menus: any }) {
    const toggleChildVisibility = (index: number) => {
        const updatedMenus = [...menus];
        updatedMenus[index].isOpen = !updatedMenus[index].isOpen;
        setMenus(updatedMenus);
    };
    return (
        <Sidebar>
            {menus.map(
                (
                    item: {
                        hasChild: boolean;
                        child: {
                            hasChild: boolean;
                            url: string;
                            title: string;
                            params: any;
                        }[];
                        url: string;
                        title: string;
                        isOpen: boolean;
                        params: any;
                    },
                    index: number
                ) => {
                    let child;
                    if (item.hasChild) {
                        child = item.child;
                    }

                    return (
                        <React.Fragment key={`item-${index}`}>
                            <Item
                                isActive={route().current(item.url)}
                                url={
                                    !item.hasChild
                                        ? route(item.url, item.params)
                                        : "#"
                                }
                            >
                                <p
                                    className="flex items-center gap-5"
                                    onClick={() => toggleChildVisibility(index)}
                                >
                                    {item.title}
                                    {item.hasChild && (
                                        <FontAwesomeIcon
                                            className={`transition-all duration-500 ${
                                                item.isOpen && "rotate-90"
                                            }`}
                                            icon={faChevronRight}
                                        />
                                    )}
                                </p>
                            </Item>
                            {item.hasChild &&
                                item.isOpen &&
                                item.child?.map(
                                    (
                                        childItem: {
                                            hasChild: boolean;
                                            url: string;
                                            title: string;
                                            params: any;
                                        },
                                        childIndex: number
                                    ) => {
                                        return (
                                            <Item
                                                key={`child-${childIndex}`}
                                                isActive={route().current(
                                                    childItem.url
                                                )}
                                                url={
                                                    !childItem.hasChild
                                                        ? route(
                                                              childItem.url,
                                                              childItem.params
                                                          )
                                                        : "#"
                                                }
                                            >
                                                {childItem.title}
                                            </Item>
                                        );
                                    }
                                )}
                        </React.Fragment>
                    );
                }
            )}
        </Sidebar>
    );
}

function setMenus(
    updatedMenus: (
        | {
              title: string;
              url: string;
              hasChild: boolean;
              isOpen?: undefined;
              child?: undefined;
          }
        | {
              title: string;
              hasChild: boolean;
              isOpen: boolean;
              child: { title: string; url: string; hasChild: boolean }[];
              url?: undefined;
          }
    )[]
) {
    throw new Error("Function not implemented.");
}
