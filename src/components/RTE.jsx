import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import conf from "../conf/conf";

export default function RTE({name, control, label, defaultValue = ""}) {
    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}
            <Controller
            name={name || "content"}
            control={control}
            render={({field: {onChange}}) => (
                <Editor
                apiKey={conf.tinymceId}
                initialValue = {defaultValue}
                init={{
                    initialValue: defaultValue,
                    branding: false,
                    height: 500,
                    menubar: true,
                    plugins: [
                        "advlist", "anchor", "autolink", "charmap", "code", "fullscreen",
                        "help", "image", "insertdatetime", "lists", "link", "lists", "media",
                        "preview", "searchreplace", "table", "visualblocks", "wordcount",
                    ],
                    toolbar: "undo redo | blocks | styles | bold italic underline strikethrough forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | removeformat | help",
                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                }}
                onEditorChange={onChange}
                />
            )}
            />
        </div>
    )
}