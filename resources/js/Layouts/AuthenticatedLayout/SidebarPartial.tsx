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
                        }[];
                        url: string;
                        title: string;
                        isOpen: boolean;
                    },
                    index: number
                ) => {
                    let child;
                    if (item.hasChild) {
                        child = item.child;
                    }
                    console.log(route().current(item.url), item.title);
                    return (
                        <React.Fragment key={`item-${index}`}>
                            <Item
                                key={`item-${index}`}
                                isActive={route().current(item.url)}
                                url={!item.hasChild ? route(item.url) : "#"}
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
                                        },
                                        childIndex: number
                                    ) => {
                                        return (
                                            <Item
                                                key={`child-${childIndex}`}
                                                url={
                                                    !childItem.hasChild
                                                        ? childItem.url
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
