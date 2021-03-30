import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
    faCaretDown,
    faCaretRight,
    faFilter,
    faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/common/Button';
import SearchInput from 'components/common/SearchInput';
import React from 'react';
import { TreeItem, TreeView } from '../../../../components/common/tree';
import { ButtonsContainer, Container, TreeViewContainer } from './style';

const LeftPanel = ({ className }) => {
    return (
        <Container className={className}>
            <SearchInput width="100%" height="45px" />
            <ButtonsContainer>
                <Button
                    width="48%"
                    height="40px"
                    variant="contained"
                    startIcon={<FontAwesomeIcon icon={faPlusSquare} />}
                >
                    New
                </Button>
                <Button
                    width="48%"
                    height="40px"
                    variant="outlined"
                    startIcon={<FontAwesomeIcon icon={faFilter} />}
                >
                    Filter
                </Button>
            </ButtonsContainer>
            <TreeViewContainer>
                <TreeView
                    defaultCollapseIcon={<FontAwesomeIcon icon={faCaretDown} />}
                    defaultExpandIcon={<FontAwesomeIcon icon={faCaretRight} />}
                    multiSelect
                >
                    <TreeItem
                        nodeId="1"
                        label={
                            <div>
                                <FontAwesomeIcon icon={faGithub} />
                                <span>GitHub</span>
                            </div>
                        }
                    >
                        <TreeItem nodeId="2" label="Calendar" />
                        <TreeItem nodeId="3" label="Chrome" />
                        <TreeItem nodeId="4" label="Webstorm" />
                    </TreeItem>
                    <TreeItem nodeId="5" label="Bitbucket">
                        <TreeItem nodeId="6" label="Material-UI">
                            <TreeItem nodeId="7" label="src">
                                <TreeItem nodeId="8" label="index.js" />
                                <TreeItem nodeId="9" label="tree-view.js" />
                            </TreeItem>
                        </TreeItem>
                    </TreeItem>
                    <TreeItem nodeId="10" label="GitLab">
                        <TreeItem nodeId="11" label="Material-UI">
                            <TreeItem nodeId="12" label="src">
                                <TreeItem nodeId="13" label="index.js" />
                                <TreeItem nodeId="14" label="tree-view.js" />
                            </TreeItem>
                        </TreeItem>
                    </TreeItem>
                </TreeView>
                {/* <TreeView
                    defaultCollapseIcon={<FontAwesomeIcon icon={faCaretDown} />}
                    defaultExpandIcon={<FontAwesomeIcon icon={faCaretRight} />}
                    multiSelect
                >
                    <TreeItem
                        nodeId="1"
                        label={
                            <div>
                                <FontAwesomeIcon icon={faGithub} />
                                <span>GitHub</span>
                            </div>
                        }
                    >
                        <TreeItem nodeId="2" label="Calendar" />
                        <TreeItem nodeId="3" label="Chrome" />
                        <TreeItem nodeId="4" label="Webstorm" />
                    </TreeItem>
                    <TreeItem nodeId="5" label="Bitbucket">
                        <TreeItem nodeId="6" label="Material-UI">
                            <TreeItem nodeId="7" label="src">
                                <TreeItem nodeId="8" label="index.js" />
                                <TreeItem nodeId="9" label="tree-view.js" />
                            </TreeItem>
                        </TreeItem>
                    </TreeItem>
                    <TreeItem nodeId="5" label="GitLab">
                        <TreeItem nodeId="6" label="Material-UI">
                            <TreeItem nodeId="7" label="src">
                                <TreeItem nodeId="8" label="index.js" />
                                <TreeItem nodeId="9" label="tree-view.js" />
                            </TreeItem>
                        </TreeItem>
                    </TreeItem>
                </TreeView> */}
            </TreeViewContainer>
        </Container>
    );
};

export default LeftPanel;
