import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/common/Button';
import TextInput from 'components/common/TextInput';
import { TreeItem, TreeView } from 'components/common/tree';
import SidePanel from 'components/SidePanel';
import COLORS from 'constants/colors';
import React from 'react';
import {
    ButtonsContainer,
    MainContainer,
    PanelContainer,
    TreeContainer,
    TreeFontAwesomeIcon,
} from './styles';

const PanelLayout = () => {
    return (
        <PanelContainer>
            <SidePanel>
                <TextInput
                    width="100%"
                    height="40px"
                    backgroundColor="transparent"
                    borderColor={COLORS.GREY}
                    color={COLORS.GREY}
                    placeholder="Search..."
                    rounded
                    outlined
                ></TextInput>
                <ButtonsContainer>
                    <Button
                        width="48%"
                        height="35px"
                        backgroundColor={COLORS.GREEN}
                        color={COLORS.FOREGROUND.MAIN}
                        rounded
                    >
                        New
                    </Button>
                    <Button
                        width="48%"
                        height="35px"
                        backgroundColor="transparent"
                        color={COLORS.GREY}
                        borderColor={COLORS.GREY}
                        rounded
                        outlined
                    >
                        Filters
                    </Button>
                </ButtonsContainer>
                <TreeContainer>
                    <TreeView
                        defaultCollapseIcon={
                            <TreeFontAwesomeIcon icon={faCaretDown} />
                        }
                        defaultExpandIcon={
                            <TreeFontAwesomeIcon icon={faCaretRight} />
                        }
                        multiSelect
                    >
                        <TreeItem
                            nodeId="1"
                            label={
                                <div>
                                    <TreeFontAwesomeIcon icon={faGithub} />
                                    <span>GitHub</span>
                                </div>
                            }
                        >
                            <TreeItem nodeId="2" label="Calendar" />
                            <TreeItem nodeId="3" label="Chrome" />
                            <TreeItem nodeId="4" label="Webstorm" />
                        </TreeItem>
                        <TreeItem
                            nodeId="5"
                            label={
                                <div>
                                    <TreeFontAwesomeIcon icon={faGithub} />
                                    <span>Bitbucket</span>
                                </div>
                            }
                        >
                            <TreeItem nodeId="6" label="Material-UI">
                                <TreeItem nodeId="7" label="src">
                                    <TreeItem nodeId="8" label="index.js" />
                                    <TreeItem nodeId="9" label="tree-view.js" />
                                </TreeItem>
                            </TreeItem>
                        </TreeItem>
                        <TreeItem
                            nodeId="10"
                            label={
                                <div>
                                    <TreeFontAwesomeIcon icon={faGithub} />
                                    <span>GitLab</span>
                                </div>
                            }
                        >
                            <TreeItem nodeId="11" label="Material-UI">
                                <TreeItem nodeId="12" label="src">
                                    <TreeItem nodeId="13" label="index.js" />
                                    <TreeItem
                                        nodeId="14"
                                        label="tree-view.js"
                                    />
                                </TreeItem>
                                <TreeItem nodeId="15" label="src">
                                    <TreeItem nodeId="16" label="index.js" />
                                    <TreeItem
                                        nodeId="17"
                                        label="tree-view.js"
                                    />
                                </TreeItem>
                                <TreeItem nodeId="12" label="src">
                                    <TreeItem nodeId="13" label="index.js" />
                                    <TreeItem
                                        nodeId="14"
                                        label="tree-view.js"
                                    />
                                </TreeItem>
                                <TreeItem nodeId="12" label="src">
                                    <TreeItem nodeId="13" label="index.js" />
                                    <TreeItem
                                        nodeId="14"
                                        label="tree-view.js"
                                    />
                                </TreeItem>
                                <TreeItem nodeId="12" label="src">
                                    <TreeItem nodeId="13" label="index.js" />
                                    <TreeItem
                                        nodeId="14"
                                        label="tree-view.js"
                                    />
                                </TreeItem>
                            </TreeItem>
                        </TreeItem>
                    </TreeView>
                </TreeContainer>
            </SidePanel>
            <MainContainer>
                <main></main>
            </MainContainer>
            <SidePanel></SidePanel>
        </PanelContainer>
    );
};

export default PanelLayout;
