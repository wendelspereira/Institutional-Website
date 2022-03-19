import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import styles from "./styles.module.scss"

export default function Aside({ asideTitle, items, setState }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <h3>{asideTitle}</h3>
        <div className={styles.link}>
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
          >
            {
              items?.map((item, index) => {
                return (
                  <TreeItem
                    nodeId={index.toString()}
                    key={index.toString()}
                    label={item.title}
                    onClick={()=>setState(item)}
                   />
                )
              })
            }
          </TreeView >
        </div>
      </div>
    </aside>
  );
}
