import React from "react";
//import { AiOutlineClose } from "react-icons/ai";
//import { RxHamburgerMenu } from "react-icons/rx";
import Drop from "../input/Drop"
import Slide from "../input/Slide";
import useModels from "./hooks/useModels";
import { useOpenAI } from "../context/OpenAIProvider";
import { OpenAIChatModels, OpenAIConfig } from "../utils/OpenAI";

type Props = {};

export default function ConfigSidebar ({}: Props) {
    const { config, updateConfig } = useOpenAI();
    const { models, loadingModels } = useModels ();

    const handleUpdateConfig =  <K extends keyof OpenAIConfig>(
        id: K,
        value: OpenAIConfig[K] | undefined
    ) => {
        updateConfig({
            [id]: value,
        });
    };

    return (
        
        <div className="hidden min-w-[240px] flex-col items-stretch gap-y-4 p-4 md:flex">
            <Drop
                label="Model"
                options={
                    loadingModels
                        ? []
                        : (models.map(({id}) => ({label: id, value: id})) as any)
                }
                value={config.model}
                onSelect={(option) => handleUpdateConfig("model",option)} 
            />
            <Slide
                label="temperature"
                range={[0,1]}
                step={0.01}
                value={config.temperature as number}
                onChange={(value: OpenAIConfig["temperature"]) =>
                    handleUpdateConfig("temperature", value)
            }
            />
            <Slide
                label="maxium length"
                range={[0,OpenAIChatModels[config.mode].maxLimit || 8192]}
                step={1}
                value={config.max_tokens as number}
                onChange={(value: OpenAIConfig["max_tokens"]) =>
                    handleUpdateConfig("max_tokens", value)
            }
            />
            <Slide
                label="frequency penalty"
                range={[0,1]}
                step={0.01}
                value={config.frequency_penalty as number}
                onChange={(value: OpenAIConfig["frequency_penalty"]) =>
                    handleUpdateConfig("frequency_penalty", value)
            }
            />
            <Slide
                label="presence penalty"
                range={[0,1]}
                step={0.01}
                value={config.presence_penalty as number}
                onChange={(value: OpenAIConfig["presence_penalty"]) =>
                    handleUpdateConfig("presence_penalty", value)
            }
            />
        </div>
    )
}
;