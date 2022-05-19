export interface Camera {
    id: number,
    name: String,
    rover_id: number,
    full_name:String
}

export interface Rover {
    id: number,
    name: String,
    landing_date: String,
    launch_date:String
    status:string
}

export interface MarsPhoto {
    id: number,
    sol: number,
    camera: Camera
    img_src: String,
    earth_date: String,
    rover:Rover,
}