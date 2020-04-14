/** ControlMVC model definitions **/

export interface ControlModel {
  type: string
  id: string
  attributes: {
    name: string
    type: string
    maximum_rabi_rate: number
    polar_angle: number
  }
}
