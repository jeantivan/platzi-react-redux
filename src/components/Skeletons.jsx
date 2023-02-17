import "./Skeletons.css";
import { Card, Skeleton } from "antd";

const Skeletons = () => {
  return (
    <div className="Skeletons">
      <Card>
        <Skeleton active>
          <Card.Meta title="Loading..."></Card.Meta>
        </Skeleton>
      </Card>
      <Card>
        <Skeleton active>
          <Card.Meta></Card.Meta>
        </Skeleton>
      </Card>
      <Card>
        <Skeleton active>
          <Card.Meta></Card.Meta>
        </Skeleton>
      </Card>
      <Card>
        <Skeleton active>
          <Card.Meta></Card.Meta>
        </Skeleton>
      </Card>
    </div>
  );
};

export default Skeletons;
