import React, { useState, useEffect } from 'react';
import { NextPage } from "next/types";
import "react-step-progress-bar/styles.css";

import { ProgressBar, Step } from "react-step-progress-bar";
import { calcAxisDelta } from 'framer-motion/types/projection/geometry/delta-calc';

const steps = [
  {
    status: "Phase 1"
  },
  {
    status: "Phase 2"
  },
  {
    status: "Phase 3"
  },
  {
    status: "Phase 4"
  },
  {
    status: "Phase 5"
  },
  {
    status: "Phase 6"
  },
  {
    status: "Phase 7"
  },
  {
    status: "Phase 8"
  },
  {
    status: "Phase 9"
  },
  {
    status: "Phase 10"
  },
  {
    status: "Phase 11"
  }
];
const Stepbar: NextPage = () => {

  const [isLoaded, setLoaded] = useState<boolean>(false);

  const transfer = {
    status: "Phase 4" // change transfer status to progress bar
  };

  const getStepPosition = (transferStatus: any) => {
    return steps.findIndex(({ status }) => status === transferStatus);
  };

  useEffect(() => {
    setLoaded(true);

  }, []);

  return (
    <div style={{ margin: 45 }}>
      <ProgressBar
        width={1280 - 100 - 13 * 2}
        height={7}
        percent={
          100 *
          ((getStepPosition(transfer.status) + 1) / (steps.length - 1))
        }
        filledBackground="linear-gradient(to right, white, white)"
      >
        {steps.map((step, index, arr) => {
          return (
            <Step key={index}
              // position={100 * (index / arr.length)}
              transition="scale"
              // eslint-disable-next-line react/no-children-prop
              children={({ accomplished }) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    width: 13,
                    height: 13,
                    color: "black",
                    backgroundColor: accomplished ? "white" : "gray"
                  }}
                >
                  <br />
                  <br />
                  <br />
                  {step.status}
                </div>

              )}
            />
          );
        })}
      </ProgressBar>

      {isLoaded && <div className="blur-item">
      </div>}

    </div>




  )
}


export default Stepbar